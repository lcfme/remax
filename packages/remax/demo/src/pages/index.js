import Remax from '../../..';
import './index.less';

const {
  React,
} = Remax;

const ClickComponent = () => {
  const [count, setCount] = Remax.useState(0);

  const handleClick = () => {
    setCount(count + 222);
  };

  return (
    <view onClick={handleClick}>
      <image className="test-image" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />

    CLICK the image
      {count}
    times
    </view>
  );
};

const showToast = () => Remax.api.showToast({
  title: '成功',
  icon: 'succes',
  duration: 1000,
  mask: true,
});

const Component = () => (
  <view>

    <view className="title">
      {'<ClickComponent />'}
with useState
    </view>
    <ClickComponent />
    <button onClick={showToast}>
      点击
    </button>

  </view>
);

Remax.render(<Component />);