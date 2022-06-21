const homepage = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/homeRoutes', {
      method: 'GET',
      headers: { 'Content-Type': 'text/plain' }
    });
  };
  
  document.querySelector('.product').addEventListener('click', homepage);