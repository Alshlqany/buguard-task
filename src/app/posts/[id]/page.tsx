import PostDetails from "@/components/PostDetails";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <PostDetails id={id} />;
};

export default PostPage;
