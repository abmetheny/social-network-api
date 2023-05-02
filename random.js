Thought.find({})
        .exec(((err, result) => {
        if (err) {
            res.status(500).send({error: JSON.stringify(err)});
        } else {
            const allResults = result.map((result) => {
                return { id: result._id, username: result.username, createdAt: result.createdAt};
            });
            res.status(200).send(allResults);
        }
    }))   
    // Thought.find({}).exec("select")
    //     .then((result) => res.status(200).json(result))
    //     .catch((error) => res.status(500).send({error: JSON.stringify(error)}));       