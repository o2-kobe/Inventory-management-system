import { regionsData } from "./data";

// changes will be done with the ? used
export type Device = {
  id: number;
  brand?: string;
  serialNumber?: string;
  quantity: number;
  embosment?: string;
};

export type Court = {
  id: number;
  courtName: string;
  devices: Device[];
};

// export type Department = { for now, will be changed when populated
//   id: number;
//   departmentName: string;
//   devices: Device[];
// };

export type CourtType = {
  id: number;
  courtType: string;
  courts: Court[];
};

export type Region = {
  id: number;
  regionName: string;
  slug: string;
  courtTypes: CourtType[];
  departments?: Department[];
};

export type DepartmentDevice = {
  id: number;
  deviceName: string;
  quantity: number;
};

export type Department = {
  id: number;
  departmentName: string;
  devices: DepartmentDevice[];
};

// Build lookup maps once
const slugToRegion = new Map<string, Region>();
const regionIdToRegion = new Map<number, Region>();
const regionIdToCourtTypeIdToCourtType = new Map<
  number,
  Map<number, CourtType>
>();
const courtIdToCourt = new Map<
  number,
  { regionId: number; courtTypeId: number; court: Court }
>();

// const departmentIdToDepartment = new Map<number, Department>();

for (const region of regionsData as Region[]) {
  slugToRegion.set(region.slug, region);
  regionIdToRegion.set(region.id, region);

  const ctMap = new Map<number, CourtType>();
  for (const ct of region.courtTypes) {
    ctMap.set(ct.id, ct);
    for (const court of ct.courts) {
      courtIdToCourt.set(court.id, {
        regionId: region.id,
        courtTypeId: ct.id,
        court,
      });
    }
  }
  regionIdToCourtTypeIdToCourtType.set(region.id, ctMap);
}

export function getRegionBySlug(slug: string): Region | undefined {
  return slugToRegion.get(slug);
}

export function getCourtTypeByIds(
  regionId: number,
  courtTypeId: number
): CourtType | undefined {
  const map = regionIdToCourtTypeIdToCourtType.get(regionId);
  return map?.get(courtTypeId);
}

export function getCourtById(
  courtId: number
): { region: Region; courtType: CourtType; court: Court } | undefined {
  const ref = courtIdToCourt.get(courtId);
  if (!ref) return undefined;
  const region = regionIdToRegion.get(ref.regionId);
  const courtType = regionIdToCourtTypeIdToCourtType
    .get(ref.regionId)
    ?.get(ref.courtTypeId);
  if (!region || !courtType) return undefined;
  return { region, courtType, court: ref.court };
}

export function getCourtByIds(
  regionId: number,
  courtTypeId: number,
  courtId: number
): { region: Region; courtType: CourtType; court: Court } | undefined {
  const region = regionIdToRegion.get(regionId);
  const ct = regionIdToCourtTypeIdToCourtType.get(regionId)?.get(courtTypeId);
  const court = ct?.courts.find((c) => c.id === courtId);
  if (!region || !ct || !court) return undefined;
  return { region, courtType: ct, court };
}

export function listDepartmentsByRegionSlug(
  regionSlug: string
): { region: Region; departments: Department[] } | undefined {
  const region = getRegionBySlug(regionSlug);
  if (!region) return undefined;
  return { region, departments: region.departments ?? [] };
}

export function getDepartmentByIds(
  regionSlug: string,
  departmentId: number
): { region: Region; department: Department } | undefined {
  const region = getRegionBySlug(regionSlug);
  const department = region?.departments?.find((d) => d.id === departmentId);
  if (!region || !department) return undefined;
  return { region, department };
}
