import {PreloadedState} from "redux";

export interface State123 extends PreloadedState<any>{
    configs: {
      pageSize: number,
      currentPage: number,
      showFreeTextSearch: boolean,
      defaultSorting: string,
      loggedIn: boolean,
    }
  }
