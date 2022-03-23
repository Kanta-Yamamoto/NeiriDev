import Link from "next/link";
import { useRecoilState } from "recoil";
import { countState, userState } from "../components/atoms";

const Home = () => {

  //atomの値の操作を定義（read,write)
  const [count, setCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);

  //count increment処理
  const increment = c => {
    return c + 1;
  }

  //userのageをカウントアップ（機能としては意味無し）
  const updateUser = u => {
    return { ...u, ...{ age: u.age + 1 } };
  }

  const updateName = u => {
    return { name: "hoge3", age: u.age };
  }

  return (
    <>
      <div className="h-6 w-auto">Home</div>
      <div>
        <p>count:{count}</p>
        <button onClick={() => setCount(increment)}>count increment</button>
        <hr />
        <p>user.name:{user.name}</p>
        <p>user.age:{user.age}</p>
        <button onClick={() => setUser(updateUser)}>age increment</button><br></br>
        <button onClick={() => setUser(updateName)}>change Name</button>

      </div>
      <hr />
      <div>
        <Link href="/about"><a>About</a></Link>
      </div>
    </>
  );
}

export default Home;
