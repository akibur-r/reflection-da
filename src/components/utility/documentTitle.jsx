import { useEffect } from 'react'

function DocumentTitle(title) {

  useEffect(() => {
    document.title = `Reflection - ${title}`;
  }, [title]);

}

export default DocumentTitle