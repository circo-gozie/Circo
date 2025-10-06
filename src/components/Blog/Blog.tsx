const blogs = [
  {
    title: 'Private consultations just got better with Message Requests',
    description: 'Maximizing your access plans to suit  all your subscribers to suit all your subscribers yo...'
  },
  {
    title: 'Private consultations just got better with Message Requests',
    description: 'Maximizing your access plans to suit  all your subscribers to suit all your subscribers yo...'
  },
  {
    title: 'Private consultations just got better with Message Requests',
    description: 'Maximizing your access plans to suit  all your subscribers to suit all your subscribers yo...'
  }
];

const Blog = () => {
  return (
    <div className="padding_ space-y-12">
      <p className="text-3xl sm:text-5xl text-center font-bold">
        Catch up on the <br className="sm:hidden" /> latest updates
      </p>
      <div className="w-full flex flex-col sm:flex-row gap-12">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="w-full space-y-3"
          >
            <div className="w-full aspect-video bg-gray-100"></div>
            <p className="text-lg font-bold">{blog.title}</p>
            <p className="">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
