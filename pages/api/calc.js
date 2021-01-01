import axios from "axios"


export default async function handler(req, res) {
    if(!req.query.fname || !req.query.sname) {
        res.statusCode = 400;
        res.json({error: "Bad Request"});
        return;
    }

    var options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {fname: req.query.fname, sname: req.query.sname},
        headers: {
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
          'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
        }
      };

    const response = await axios.request(options)

    res.statusCode = 200;
    res.json(response.data);
}

/*return(
    <>
    <div>
        <button className="w-36 bg-green-500 hover bg-green-700">
            Click Me!
        </button>
    </div>
    </>
)*/