import React from "react";
import "./Home.css";
import articleImage from "../../assets/Article-Writing-1.jpeg";

function Home() {
  return (
    <div className="articleHome">
      <h1>Start Blogging!</h1>
      <img src={articleImage} alt="Article Writing" className="articleImage" />
      <p className="lead">
        Blogging is a potent way to share your thoughts, ideas, and expertise
        with a broad audience. It enables you to create content that can
        educate, entertain, and inspire readers from around the globe. Whether
        you're discussing travel, technology, lifestyle, or any other subject,
        blogging offers a platform to showcase your unique voice and connect
        with like-minded people.
      </p>
      <p className="lead">
        Starting a blog is also an excellent way to enhance your writing skills
        and develop a personal brand. By consistently producing content, you can
        improve your ability to communicate clearly and engage your audience.
        Additionally, maintaining a well-kept blog can lead to opportunities for
        networking, collaborations, and even monetization through ads and
        sponsored posts.
      </p>
      <p className="lead">
        The secret to successful blogging is consistency and authenticity. Write
        about subjects you are passionate about and always aim to provide value
        to your readers. With commitment and creativity, your blog can become a
        valuable resource and a fulfilling outlet for your creative expression.
      </p>
    </div>
  );
}

export default Home;
