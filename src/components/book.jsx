import { HeadingRow } from "./heading";

export function Book() {

  return (
    <section className="book" id="book">

      {HeadingRow("Book now")}

      {HeadingRow("私人订制")}

      <div className="row">

        <div className="image">
            <img src="./images/panda.jpg"/>
        </div>

        <form method="post">
          <div className="inputBox">
            <h3>WHERE FROM</h3>
            <input type="text" name="depart_from" placeholder="从哪里"/>
          </div>
          <div className="inputBox">
            <h3>WHERE TO</h3>
            <input type="text" name="depart_to" placeholder="去哪里"/>
          </div>
          <div className="inputBox">
            <h3>HOW MANY</h3>
            <input type="number" name="num_people" placeholder="多少人出行"/>
          </div>
          <div className="inputBox">
            <h3>DEPARTURE</h3>
            <input type="date" name="depart_date"/>
          </div>
          <div className="inputBox">
            <h3>RETURN</h3>
            <input type="date" name="return_date"/>
          </div>
          <div className="inputBox">
            <h3>CONTACT</h3>
            <input type="text" name="contact_method" placeholder="邮箱/微信号/Whatsapp"/>
          </div>
          <div className="inputBox">
            <h3>ADDITION INFORMATION</h3>
            <input type="text" name="add_info" placeholder="备注信息（任何您想让我们知道的)"/>
          </div>
          <button className="btn">立即 订制</button>
        </form>

      </div>
    
    </section>
  )
}