import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './utils/ErrorBoundary';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// jQuery for page plugin features
// TODO: Long-term, this should be moved from jquery into react
$(function() {

  // Sticky header on scroll
  $(window).on('scroll', function(e) {    
    var scroll = $(window).scrollTop();
    if (scroll < 110) {
        $(".header_navbar").removeClass("sticky");
    } else{
        $(".header_navbar").addClass("sticky");
    }
  });

  // Submenu dropdowns on mobile devices
  var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
  if(subMenu.length) {
      var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
      
      subMenuToggler.on('click', function() {
          $(this).parent().parent().children('.sub-menu').slideToggle();
          return false
      });   
  }

})