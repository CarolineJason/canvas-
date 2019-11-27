import React, { Component } from 'react'

export default class AsyncAwait extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          completed: false,
          id: 3,
          title: "fugiat veniam minus",
          userId: 1,
        }
      ],
    };
  }
  componentDidMount() {
    this.init();
  }

  init = async () => {
    const result = await this.getPro();
    const num = Math.ceil(Math.random() * 10);
    const res = await this.getId(num);

    const resData = [];
    resData.push(res);
    this.setState({
      data: resData,
    });
  }

  getPro = () => {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
          const result = res.json();
          resolve(result);
        })
    })
  }

  getId = (id) => {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
          const data = res.json();
          resolve(data);
        })
    })
  }

  render() {
    const { data } = this.state;
    console.log('data:', data);
    return (
      <div>
        <p>async await 测试</p>
        {
          data && data.map((item, index) => {
            return (
              <p key={index.toString()}>
                <span>{item.id}</span> -- <span>{item.title}</span> -- <span>{item.completed}</span>
              </p>
            )
          })
        }
      </div>
    )
  }
}
