import { PostCard } from "./PostCard";

export const Results = ({ posts }) => {
  return (
    <div className="max-w-5xl lg:mx-auto mx-2 grid grid-cols-1 gap-5 mb-10 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <PostCard
          key={post.databaseId}
          title={post.title}
          destination={post.uri}
          date={post.date}
          autor={post.author.node.name}
          tags={post.tags.nodes.name}
          type={post.postsFeatures}
          image={post.featuredImage?.node?.sourceUrl}
        />
      ))}
    </div>
  );
};
