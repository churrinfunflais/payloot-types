declare namespace Express {
    export interface Response {
        ctx: {
            config?: {
                active?: boolean;
                name?: string;
                logo?: string;
                region?: string;
                currency?: string;
                language?: string;
                timezone?: string;
                loyalty?: {
                    cards?: {
                        bin?: number;
                        idType?: 'uuid' | 'bin';
                        returnBarcode?: boolean;
                    };
                };
                contact?: {
                    email?: string;
                    phone?: string;
                    address?: {
                        street?: string;
                        city?: string;
                        state?: string;
                        zip?: string;
                        country?: string;
                    };
                };
                billing?: {
                    email?: string;
                    phone?: string;
                    document?: string;
                    documentType?: string;
                    currency?: string;
                    address?: {
                        street?: string;
                        city?: string;
                        state?: string;
                        zip?: string;
                        country?: string;
                    };
                };
            };
            workspaceId: string;
            loyaltyId: string;
            cardId: string;
            transactionId: string;
            itemId: string;
            clientId: string;
            orderId: string;
            referralId: string;
            promotionId: string;
            authorizationToken: string;
            authorizationId: string;
            cancellationId: string;
            settlementId: string;
            user: {
                uid: string | undefined;
                email: string | undefined;
            };
        };
    }
}
