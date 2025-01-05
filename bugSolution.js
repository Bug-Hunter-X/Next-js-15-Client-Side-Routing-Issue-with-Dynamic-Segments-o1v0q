```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleRouteChange = (href) => {
    router.push(href, undefined, { shallow: true });
  };

  return (
    <div>
      <a href="/" onClick={(e) => {
        e.preventDefault();
        handleRouteChange('/');
      }} >Home</a>
      <a href="/about" onClick={(e) => {
        e.preventDefault();
        handleRouteChange('/about');
      }}>About</a>
    </div>
  );
}

export default MyComponent;
```