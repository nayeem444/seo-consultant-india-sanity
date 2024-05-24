import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '../lib/mutations';

interface CommentFormProps {
  databaseId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ databaseId }) => {
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState(''); // Added authorName state
  const [createComment, { data, loading, error }] = useMutation(CREATE_COMMENT);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createComment({
        variables: {
          content,
          commentOn: parseInt(databaseId, 10), // Convert databaseId to Int
          author: authorName,
        },
      });
      setContent('');
      setAuthorName('');
    } catch (err) {
      console.error('Error creating comment:', err);
    }
  };
console.log(databaseId)
  return (
    <form onSubmit={handleSubmit} className="max-w-xxl  p-4 bg-white shadow-md rounded my-12">
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
          Full Name
        </label>
        <input
          id="author"
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
          Comment
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Write your comment here..."
          required
        />
      </div>
      {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Post Comment'}
        </button>
      </div>
      {data && <p className="text-green-500 text-xs italic">Comment posted successfully!</p>}
    </form>
  );
};

export default CommentForm;