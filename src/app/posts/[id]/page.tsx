import PostDetails from "@/components/PostDetails";
interface PostPageParams {
  id: string;
}
const PostPage = async ({ params }: { params: Promise<PostPageParams> }) => {
  const { id } = await params;
  return <PostDetails id={id} />;
};

export default PostPage;
