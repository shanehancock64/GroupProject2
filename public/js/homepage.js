const homepage = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/hoeRoutes', {
      method: 'GET',
      headers: { 'Content-Type': 'text/plain' }
    });
  };
  
  document.querySelector('.product').addEventListener('click', homepage);