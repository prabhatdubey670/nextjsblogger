// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblogs?slug=yoyo
import * as fs from 'fs';
export default function handler(req, res) {
  fs.readFile(`blogsdata/${req.query.slug}.json`, (err, data) => {
    if (err) {
      res.status(440).json({ error: 'No such file' });
    }
    console.log(req.query.slug);
    res.status(200).json(JSON.parse(data));
  });
}
