import prisma from '../../lib/prisma';

export default async (req, res) => {
    try {
        const feed = await prisma.qualification.findMany({
            orderBy: [
                {
                  id: 'asc',
                }
            ]
        });
        res.json(feed);
    } catch (e) {
        console.error(e);
    }
};