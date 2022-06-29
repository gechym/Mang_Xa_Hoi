import * as httpRequest from '~/util/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        httpRequest.handleError(error);
    }
};
