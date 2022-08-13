import React, { useEffect, useState } from "react";
import axios from "axios";
//call api with input
const CallApi = () => {
	const [post, setPost] = useState({});
	const [id, setId] = useState(1);
	const [inputValue, setInputValue] = useState();

	useEffect(() => 
    {
        const abortController = new AbortController();
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
        .catch(err => console.log(err));

        return () => abortController.abort();
    }, [id]);

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button onClick={()=> setId(inputValue)}>Fetch</button>
            <div className="">{post.body}</div>
		</div>
	);
};

export default CallApi;
