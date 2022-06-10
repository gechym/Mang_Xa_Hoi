import Tour from '../module/Tour';
import catchAsync from '../util/catchAsync';
import APIFeature from '../util/APIfeature';

export const createTour = catchAsync(async (req, res, next) => {
    const tour = await Tour.create(req.body);

    res.status(200).json({
        message: 'success',
        data: tour,
    });
});

export const getTours = catchAsync(async (req, res, next) => {
    const { queryWhere, querySort, queryLimit, queryPage, offset } = APIFeature(req.query);

    const tour = await Tour.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
        where: {
            ...queryWhere,
        },
        order: [...querySort],
        offset,
        limit: queryLimit,
    });

    res.status(200).json({
        message: 'success',
        totalTour: await Tour.count(),
        result: tour.length,
        page: queryPage,
        data: tour,
    });
});

// 'slug',
// 'images',
// 'startDates',
// 'duration',
// 'maxGroupSize',
// 'difficulty',
// 'rating',
// 'ratingsAverage',
// 'ratingsQuantity',
// 'price',
// 'priceDiscount',
// 'summary',
// 'description',
// 'imageCover',
