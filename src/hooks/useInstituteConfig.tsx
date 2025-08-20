import { InstituteConfig, type Institutes } from "@/config/institutes";
import type { Institute } from "@/models/institutes";

export function useInstituteConfig(institute: Institutes): Institute {
	return InstituteConfig[institute];
}
