export declare global {
    namespace ReactNavigation {
        interface RootParamsList {
            Home: undefined;
            Lista: {ID: number};
            Info: {
                ID: number,
                ITEMID: number,
                TITLE: string
            };
            Definition: {
                ID: number,
                ITEMID: number,
                TITLE: string
            };
            Presentation: {
                ID: number,
                ITEMID: number,
                TITLE: string
            }
        }
    }
}