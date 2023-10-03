import React from 'react';
import { useParams } from 'react-router-dom';

interface RouteParams {
  id: string;
  [key: string]: string | undefined; // Adicione esta linha para corresponder à expectativa do useParams
}

function PostPage() {
  const { id } = useParams<RouteParams>();

  return (
    <div>
      <h1>Post ID: {id}</h1>
    </div>
  );
}

export default PostPage;
