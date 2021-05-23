import { InMemoryCache, Reference, makeVar } from '@apollo/client';

export const firstNameVar = makeVar("");
export const lastNameVar = makeVar("");
export const phoneVar = makeVar("");
export const jarMembershipsByUserIdVar = makeVar({ totalCount: 0 });

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                firstName: {
                    read() {
                        return firstNameVar();
                    }
                },
                lastName: {
                    read() {
                        return lastNameVar();
                    }
                },
                phone: {
                    read() {
                        return phoneVar();
                    }
                },
                jarMembershipsByUserId: {
                    read() {
                        return jarMembershipsByUserIdVar();
                    }
                }
            }
        }
    }
});