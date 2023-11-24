import { HeadingRow } from "./heading";

export function Contact() {
  return (
    <section className="contact" id="contact">
      
      {HeadingRow("Contact Us")}

      {HeadingRow("联系我们")}

      <div className="row">

        <div className="image">
          <img src="./images/panda.jpg" alt=""/>
        </div>

        <form action="">
          <div className="inputBox">
            <input type="text" placeholder="您的姓名"/>
            <input type="email" placeholder="您的邮箱"/>
          </div>
          <div className="inputBox">
            <input type="number" placeholder="您的电话"/>
            <input type="text" placeholder="反馈主题"/>
          </div>
          <textarea placeholder="您反馈的内容" name="" id="" cols="30" rows="10"></textarea>
          <button className="btn">发送给我们</button>
        </form>

      </div>
        
    </section>

  )
}