import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import './styles/Navigation.scss'
import './styles/Footer.scss'
import './styles/RequesterList.scss'
import './styles/Banner.scss'
import Navigation from './components/navigation.jsx';
import Footer from './components/footer.jsx';
import CardList from './components/CardList.jsx';
import Banner from './components/Banner'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <h1>Requester List</h1>
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
