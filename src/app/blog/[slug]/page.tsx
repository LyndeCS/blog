export default function BlogPage({ params }: { params: { slug: string } }) {
	return <h1>Blog Page: {params.slug}</h1>;
}
