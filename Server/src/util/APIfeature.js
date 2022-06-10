import { Op } from 'sequelize';
const APIFeature = (reqQuery) => {
    const queryObjFilter = { ...reqQuery };
    const excludedQuery = ['page', 'sort', 'limit', 'fields'];
    excludedQuery.forEach((el) => delete queryObjFilter[el]);

    let queryWhere = {};
    let querySort = reqQuery.sort || 'createdAt';
    let queryLimit = Number(reqQuery.limit) || 30;
    let queryPage = reqQuery.page || 1;
    let offset = (Number(queryPage) - 1) * Number(queryLimit);

    Object.keys(queryObjFilter).map((e) => {
        if (queryObjFilter[e]['gte']) {
            queryWhere = {
                ...queryWhere,
                [e]: {
                    [Op.gte]: Number(queryObjFilter[e]['gte']),
                },
            };
        }
        if (queryObjFilter[e]['gt']) {
            queryWhere = {
                ...queryWhere,
                [e]: {
                    [Op.gt]: Number(queryObjFilter[e]['gt']),
                },
            };
        }
        if (queryObjFilter[e]['lt']) {
            queryWhere = {
                ...queryWhere,
                [e]: {
                    [Op.lt]: Number(queryObjFilter[e]['lt']),
                },
            };
        }
        if (queryObjFilter[e]['lte']) {
            queryWhere = {
                ...queryWhere,
                [e]: {
                    [Op.lte]: Number(queryObjFilter[e]['lte']),
                },
            };
        }

        if (typeof queryObjFilter[e] === 'string') {
            queryWhere = {
                ...queryWhere,
                [e]: {
                    [Op.eq]: Number(queryObjFilter[e]),
                },
            };
        }

        if (queryObjFilter[e] === queryObjFilter['name']) {
            // Tìm kiếm
            queryWhere = {
                ...queryWhere,
                [e]: {
                    [Op.substring]: queryObjFilter['name'],
                },
            };
        }

        return e;
    });

    if (querySort) {
        querySort = querySort.split(',').map((e) => {
            if (e.startsWith('-')) {
                // loại dấu -
                return [e.slice(1), 'ASC'];
            }

            return [e, 'DESC'];
        });
    }

    return { queryWhere, querySort, queryLimit, queryPage, offset };
};

export default APIFeature;
