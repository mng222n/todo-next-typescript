import React from 'react';
import { compose } from 'recompose';
import { Button, Input, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Todo= (props) => {
  const {
    item,
    data,
    onChangeTodo,
    addTodo,
    deleteTodo,
  } = props;

  return (
    <React.Fragment>
      <Title type="success">TODO</Title>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo({
          value: item.value,
        });
      }}>
        <Input
          maxLength={256}
          style={{ width: '30%' }}
          type="text"
          value={item.value}
          onChange={e => onChangeTodo({
            value: e.target.value,
          })}
          prefix={<EditOutlined className="site-form-item-icon" />}
          suffix={
              <Tooltip title="Enter task here!">
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
          }
          />
        <Button type="primary" onClick={() => addTodo(item)}>
            ADD
          </Button>
        <br />
        <input
          type="submit"
          value="SUBMIT"
          style={{
            display: 'none',
          }}
        />
      </form>
      <hr />
      {data.map((item, index) => (
        <p key={index}>
          {item.value}
          {' '}
          <Button type="primary" onClick={() => deleteTodo(item)} danger>
            DELETE
          </Button>
        </p>
      ))}
    </React.Fragment>
  );
};

export default compose()(Todo);
