import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUser } from '@app/utils/samples/user';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUser)) {
      throw new Error('Cannot find user data');
    }

    res.status(200).json(sampleUser);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
