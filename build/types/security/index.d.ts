export interface SecurityPolicy {
    loyalty: {
        create: boolean;
        update: boolean;
        delete: boolean;
        get: boolean;
        list: boolean;
    };
    cards: {
        create: boolean;
        update: boolean;
        delete: boolean;
        get: boolean;
        list: boolean;
    };
    clients: {
        create: boolean;
        update: boolean;
        delete: boolean;
        get: boolean;
        list: boolean;
    };
    items: {
        create: boolean;
        update: boolean;
        delete: boolean;
        get: boolean;
        list: boolean;
    };
    orders: {
        create: boolean;
        update: boolean;
        delete: boolean;
        get: boolean;
        list: boolean;
    };
    promotions: {
        create: boolean;
        update: boolean;
        delete: boolean;
        get: boolean;
        list: boolean;
    };
    referrals: {
        create: boolean;
        update: boolean;
        delete: boolean;
        get: boolean;
        list: boolean;
    };
    transactions: {
        create: boolean;
        get: boolean;
        list: boolean;
        update: boolean;
    };
    triggers: {
        create: boolean;
        update: boolean;
        delete: boolean;
        get: boolean;
        list: boolean;
    };
    workspace: {
        update: boolean;
        get: boolean;
    };
}
