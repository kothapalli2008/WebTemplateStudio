import { AZURE_TYPEKEYS } from "../typeKeys";
import { ISelectedAppService } from "../../../reducers/wizardSelectionReducers/services/appServiceReducer";
import { IAvailabilityFromExtension } from "../../../actions/azureActions/setAccountAvailability";

export interface ISaveAppServiceSettings {
  type: AZURE_TYPEKEYS.SAVE_APP_SERVICE_SETTINGS;
  payload: ISelectedAppService;
}

export interface IRemoveAppServiceSettings {
  type: AZURE_TYPEKEYS.REMOVE_APP_SERVICE_SETTINGS;
}

export interface ISetAppServiceSiteNameAvailability {
  type: AZURE_TYPEKEYS.SET_APP_NAME_AVAILABILITY;
  payload: IAvailabilityFromExtension;
}
