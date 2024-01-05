import React, { useState } from 'react';
import { BasicFooter } from '../Footer';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCardNumberChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setExpiryDate(e.target.value);
  };

  const handleCvcChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCvc(e.target.value);
  };

  const validateCreditCard = () => {
    // Implement the Luhn algorithm for credit card number validation
    const sanitizedCardNumber = cardNumber.replace(/\s/g, ''); // Remove spaces
    const reversedCardNumber = sanitizedCardNumber.split('').reverse().join('');
    const sum = reversedCardNumber
      .split('')
      .map((digit, index) => {
        let num = parseInt(digit, 10);
        if (index % 2 !== 0) {
          num *= 2;
          if (num > 9) {
            num -= 9;
          }
        }
        return num;
      })
      .reduce((acc, curr) => acc + curr, 0);

    return sum % 10 === 0;
  };

  const handlePayment = () => {
    if (cardNumber && expiryDate && cvc) {
      if (validateCreditCard()) {
        // Implement your payment processing logic here (e.g., integrate with a payment gateway)
        console.log('Payment submitted!');
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid credit card number. Please check and try again.');
      }
    } else {
      setErrorMessage('Please fill in all the required fields.');
    }
  };


  return (
    <div>
      <div className="flex h-screen w-full flex-col items-center justify-around pt-[72px] md:overflow-y-hidden">
        <div className="max-w-2xl p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-center text-gray-900 dark:text-white">Payment Information</h5>
          <hr className="mx-auto my-6 max-w-screen-xl border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

          <div className="mb-6 ml-4 justify-evenly flex">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="38" 
            height="25.34" 
            viewBox="0 0 36 24"
            fill="#2256ee"
            className="dark:fill-gray-100"
            >
              <path d="M33.6 24H2.4A2.4 2.4 0 0 1 0 21.6V2.4A2.4 2.4 0 0 1 2.4 0h31.2A2.4 2.4 0 0 1 36 2.4v19.2a2.4 2.4 0 0 1-2.4 2.4m-15.76-9.238l-.359 2.25a6.84 6.84 0 0 0 2.903.531h-.011a5.167 5.167 0 0 0 3.275-.933l-.017.011a3.085 3.085 0 0 0 1.258-2.485v-.015v.001c0-1.1-.736-2.014-2.187-2.72a7.653 7.653 0 0 1-1.132-.672l.023.016a.754.754 0 0 1-.343-.592v-.002a.736.736 0 0 1 .379-.6l.004-.002a1.954 1.954 0 0 1 1.108-.257h-.006h.08l.077-.001c.644 0 1.255.139 1.806.388l-.028-.011l.234.125l.359-2.171a6.239 6.239 0 0 0-2.277-.422h-.049h.003a5.067 5.067 0 0 0-3.157.932l.016-.011a2.922 2.922 0 0 0-1.237 2.386v.005c-.01 1.058.752 1.972 2.266 2.72c.4.175.745.389 1.054.646l-.007-.006a.835.835 0 0 1 .297.608v.004c0 .319-.19.593-.464.716l-.005.002c-.3.158-.656.25-1.034.25h-.046h.002h-.075c-.857 0-1.669-.19-2.397-.53l.035.015l-.343-.172zm10.125 1.141h3.315q.08.343.313 1.5H34L31.906 7.372h-2a1.334 1.334 0 0 0-1.357.835l-.003.009l-3.84 9.187h2.72l.546-1.499zM14.891 7.372l-1.626 10.031h2.594l1.625-10.031zM4.922 9.419l2.11 7.968h2.734l4.075-10.015h-2.746l-2.534 6.844l-.266-1.391l-.904-4.609a1.042 1.042 0 0 0-1.177-.844l.006-.001H2.033l-.031.203c3.224.819 5.342 2.586 6.296 5.25A5.74 5.74 0 0 0 6.972 10.8l-.001-.001a6.103 6.103 0 0 0-2.007-1.368l-.04-.015zm25.937 4.421h-2.16q.219-.578 1.032-2.8l.046-.141l.16-.406c.066-.166.11-.302.14-.406l.188.859l.593 2.89z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="29.54" viewBox="0 0 256 199"><path d="M46.54 198.011V184.84c0-5.05-3.074-8.342-8.343-8.342c-2.634 0-5.488.878-7.464 3.732c-1.536-2.415-3.731-3.732-7.024-3.732c-2.196 0-4.39.658-6.147 3.073v-2.634h-4.61v21.074h4.61v-11.635c0-3.731 1.976-5.488 5.05-5.488c3.072 0 4.61 1.976 4.61 5.488v11.635h4.61v-11.635c0-3.731 2.194-5.488 5.048-5.488c3.074 0 4.61 1.976 4.61 5.488v11.635zm68.271-21.074h-7.463v-6.366h-4.61v6.366h-4.171v4.17h4.17v9.66c0 4.83 1.976 7.683 7.245 7.683c1.976 0 4.17-.658 5.708-1.536l-1.318-3.952c-1.317.878-2.853 1.098-3.951 1.098c-2.195 0-3.073-1.317-3.073-3.513v-9.44h7.463zm39.076-.44c-2.634 0-4.39 1.318-5.488 3.074v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.536-5.488 4.39-5.488c.878 0 1.976.22 2.854.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-59.052 2.196c-2.196-1.537-5.269-2.195-8.562-2.195c-5.268 0-8.78 2.634-8.78 6.805c0 3.513 2.634 5.488 7.244 6.147l2.195.22c2.415.438 3.732 1.097 3.732 2.195c0 1.536-1.756 2.634-4.83 2.634c-3.073 0-5.488-1.098-7.025-2.195l-2.195 3.512c2.415 1.756 5.708 2.634 9 2.634c6.147 0 9.66-2.853 9.66-6.805c0-3.732-2.854-5.708-7.245-6.366l-2.195-.22c-1.976-.22-3.512-.658-3.512-1.975c0-1.537 1.536-2.415 3.951-2.415c2.635 0 5.269 1.097 6.586 1.756zm122.495-2.195c-2.635 0-4.391 1.317-5.489 3.073v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.537-5.488 4.39-5.488c.879 0 1.977.22 2.855.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-58.833 10.976c0 6.366 4.39 10.976 11.196 10.976c3.073 0 5.268-.658 7.463-2.414l-2.195-3.732c-1.756 1.317-3.512 1.975-5.488 1.975c-3.732 0-6.366-2.634-6.366-6.805c0-3.951 2.634-6.586 6.366-6.805c1.976 0 3.732.658 5.488 1.976l2.195-3.732c-2.195-1.757-4.39-2.415-7.463-2.415c-6.806 0-11.196 4.61-11.196 10.976m42.588 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.073 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.904 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805m-55.1-10.976c-6.147 0-10.538 4.39-10.538 10.976c0 6.586 4.39 10.976 10.757 10.976c3.073 0 6.147-.878 8.562-2.853l-2.196-3.293c-1.756 1.317-3.951 2.195-6.146 2.195c-2.854 0-5.708-1.317-6.367-5.05h15.587v-1.755c.22-6.806-3.732-11.196-9.66-11.196m0 3.951c2.853 0 4.83 1.757 5.268 5.05h-10.976c.439-2.854 2.415-5.05 5.708-5.05m114.372 7.025v-18.879h-4.61v10.976c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.903 0c0-3.732 2.414-6.805 6.366-6.805c3.732 0 6.366 2.854 6.366 6.805c0 3.732-2.634 6.805-6.366 6.805c-3.952-.22-6.366-3.073-6.366-6.805m-154.107 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-17.123 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805"/><path fill="#FF5F00" d="M93.298 16.903h69.15v124.251h-69.15z"/><path fill="#EB001B" d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.373 6.366 97.47 0 79.03 0C35.343 0 0 35.343 0 79.029c0 43.685 35.343 79.029 79.029 79.029c18.44 0 35.343-6.366 48.734-16.904c-18.22-14.269-30.074-36.88-30.074-62.125"/><path fill="#F79E1B" d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029c-18.44 0-35.343-6.366-48.734-16.904c18.44-14.488 30.075-36.88 30.075-62.125c0-25.245-11.855-47.637-30.075-62.126C141.373 6.366 158.277 0 176.717 0c43.686 0 79.03 35.563 79.03 79.029"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="7.56" viewBox="0 0 512 86" className="mt-[10px]"><defs><linearGradient id="logosDiscover0" x1="19.414%" x2="88.601%" y1="9.063%" y2="80.499%"><stop offset="0%" stop-color="#F34F26"/><stop offset="100%" stop-color="#F69E35"/></linearGradient><filter id="logosDiscover1" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feMorphology in="SourceAlpha" radius="1" result="shadowSpreadInner1"/><feGaussianBlur in="shadowSpreadInner1" result="shadowBlurInner1" stdDeviation="4"/><feOffset dx="3" dy="3" in="shadowBlurInner1" result="shadowOffsetInner1"/><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/></filter><path id="logosDiscover2" d="M270.356.365c-23.982 0-43.44 18.735-43.44 41.857c0 24.584 18.613 42.96 43.44 42.96c24.208 0 43.322-18.62 43.322-42.477c0-23.716-18.986-42.34-43.322-42.34"/></defs><use fill="url(#logosDiscover0)" fill-rule="evenodd" href="#logosDiscover2"/><use filter="url(#logosDiscover1)" href="#logosDiscover2"/><path fill="#0B1015" className="dark:fill-gray-100" d="M23.746 1.891H.393v81.454h23.231c12.326 0 21.24-2.92 29.06-9.398c9.278-7.695 14.78-19.298 14.78-31.29c0-24.048-17.965-40.766-43.718-40.766m18.572 61.177c-5.021 4.53-11.486 6.488-21.76 6.488H16.29V15.684h4.268c10.274 0 16.491 1.834 21.76 6.592c5.495 4.886 8.772 12.452 8.772 20.265c0 7.83-3.277 15.66-8.772 20.527m32.48 20.277H90.67V1.891H74.8zm54.728-50.209c-9.539-3.534-12.346-5.865-12.346-10.246c0-5.134 4.998-9.039 11.849-9.039c4.763 0 8.671 1.953 12.836 6.58l8.295-10.853C143.32 3.581 135.139.532 126.214.532c-14.398 0-25.399 10.02-25.399 23.32c0 11.246 5.126 16.981 20.032 22.369c6.232 2.187 9.4 3.646 10.992 4.643c3.175 2.077 4.77 4.998 4.77 8.415c0 6.606-5.257 11.484-12.351 11.484c-7.574 0-13.674-3.782-17.34-10.865L96.67 69.802c7.314 10.733 16.11 15.512 28.214 15.512c16.488 0 28.084-11.007 28.084-26.758c0-12.949-5.36-18.816-23.442-25.42m28.448 9.522c0 23.965 18.816 42.525 43.006 42.525c6.839 0 12.701-1.352 19.915-4.759V61.727c-6.36 6.358-11.98 8.916-19.19 8.916c-15.996 0-27.363-11.606-27.363-28.102c0-15.626 11.722-27.964 26.638-27.964c7.561 0 13.311 2.685 19.915 9.158V5.04C213.933 1.51 208.183.054 201.343.054c-24.067 0-43.369 18.935-43.369 42.604m191.652 13.948L327.883 1.891h-17.346l34.58 83.535h8.543L388.843 1.89h-17.217zm46.44 26.74h45.065v-13.79h-29.189V47.555h28.072V33.763h-28.072v-18.08h29.189V1.892h-45.066zM504.02 25.93c0-15.259-10.49-24.039-28.823-24.039H451.62v81.454h15.895V50.608h2.08l21.975 32.737h19.544l-25.667-34.31c11.988-2.452 18.573-10.639 18.573-23.105m-31.882 13.452h-4.623V14.7h4.877c9.915 0 15.287 4.165 15.287 12.092c0 8.177-5.372 12.59-15.541 12.59"/>
            </svg>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="38" 
            height="25.34" 
            viewBox="0 0 36 24" 
            fill="#2256ee"
            className="dark:fill-gray-100"
            >
              <path d="M33.6 24H2.4A2.4 2.4 0 0 1 0 21.6V11.504h1.729l.39-.944h.873l.389.94h3.402v-.715l.304.72h1.766l.304-.732v.73h8.453V9.959h.16c.114.004.147.014.147.204v1.342h4.373v-.359c.447.227.974.36 1.533.36l.095-.001h-.005h1.84l.394-.94h.873l.385.94h3.546v-.894l.536.894h2.836V5.601h-2.807v.697l-.393-.697h-2.886v.697l-.361-.697h-3.897a3.47 3.47 0 0 0-1.709.353l.021-.009v-.344h-2.688v.344a1.627 1.627 0 0 0-1.149-.343h.006h-9.823l-.659 1.525l-.677-1.525H4.207v.697l-.341-.697h-2.64l-1.223 2.8v-6a2.4 2.4 0 0 1 2.4-2.4h31.2a2.4 2.4 0 0 1 2.4 2.4v10.48H34.13c-.03-.002-.066-.002-.101-.002c-.434 0-.837.13-1.173.353l.008-.005v-.346h-2.77a1.923 1.923 0 0 0-1.215.349l.006-.004v-.346h-4.946v.346a2.683 2.683 0 0 0-1.327-.346h-.039h.002h-3.263v.346a2.253 2.253 0 0 0-1.436-.345l.009-.001h-3.651l-.836.904l-.782-.904H7.162v5.908h5.352l.861-.918l.811.918h3.299v-1.383h.46a3.228 3.228 0 0 0 1.296-.217l-.022.008v1.594h2.72v-1.539h.131c.166 0 .183.006.183.174v1.366h8.266l.101.002c.474 0 .916-.142 1.284-.385l-.009.005v.378h2.622l.125.002c.491 0 .958-.101 1.382-.284l-.023.009v3.082a2.4 2.4 0 0 1-2.4 2.4zm-12.495-6.039h-1.018v-4.235h2.336a2.45 2.45 0 0 1 1.233.206l-.016-.006c.313.172.522.5.522.876l-.002.067v-.003l.001.038c0 .486-.293.904-.713 1.086l-.008.003c.201.072.369.195.494.354l.002.002a1.226 1.226 0 0 1 .168.779l.001-.006v.838h-1.016v-.53a1.212 1.212 0 0 0-.163-.834l.003.005a.98.98 0 0 0-.748-.187l.006-.001h-1.082v1.547zm0-3.36v.951h1.23a.97.97 0 0 0 .506-.09l-.006.003a.459.459 0 0 0 .21-.385l-.001-.023v.001a.405.405 0 0 0-.207-.38l-.002-.001a.966.966 0 0 0-.484-.08h.004zM12.08 17.96H8.073v-4.234h4.07l1.245 1.388l1.287-1.388h3.233c1.148 0 1.706.457 1.706 1.395c0 .955-.577 1.419-1.76 1.419h-1.265v1.419h-1.967l-1.246-1.399zm3.501-3.78l-1.554 1.67l1.554 1.724zm-6.499 2.055v.842h2.488l1.15-1.242l-1.106-1.234H9.081v.77h2.222v.863zm7.507-1.633v1.078h1.307c.4 0 .63-.204.63-.56c0-.34-.214-.519-.619-.519zm18.038 3.36h-1.954v-.91h1.946a.559.559 0 0 0 .411-.106l-.001.001a.372.372 0 0 0 .119-.273v-.016a.348.348 0 0 0-.123-.266a.513.513 0 0 0-.358-.094h.002l-.187-.006c-.914-.024-1.949-.052-1.949-1.305c0-.61.382-1.261 1.451-1.261h2.017v.902h-1.845a.693.693 0 0 0-.412.082l.004-.002a.329.329 0 0 0-.147.302v-.001v.011a.32.32 0 0 0 .22.304l.002.001a1.12 1.12 0 0 0 .392.048h-.003l.549.014a1.583 1.583 0 0 1 1.151.343l-.003-.002c.03.024.056.05.079.079l.001.001l.012 1.612a1.577 1.577 0 0 1-1.381.541zm-3.949 0h-1.972v-.91h1.962a.577.577 0 0 0 .415-.106l-.002.001a.373.373 0 0 0 .118-.273v-.01a.363.363 0 0 0-.123-.272a.526.526 0 0 0-.363-.094h.002l-.186-.006c-.911-.024-1.945-.052-1.945-1.305c0-.61.38-1.261 1.447-1.261h2.028v.902h-1.856a.686.686 0 0 0-.409.082l.004-.002a.354.354 0 0 0 .066.619l.002.001a1.134 1.134 0 0 0 .397.048h-.003l.545.014a1.609 1.609 0 0 1 1.158.344l-.003-.003a1.183 1.183 0 0 1 .302.901v-.005c.003.883-.532 1.333-1.587 1.333zm-2.578 0h-3.38v-4.237h3.377v.875H25.73v.77h2.312v.863H25.73v.842l2.37.004v.88zm1.97-7.286h-2.061l-.394-.944h-2.102l-.382.944h-1.184a2.18 2.18 0 0 1-1.472-.471l.005.003a2.122 2.122 0 0 1-.54-1.625l-.001.008a2.213 2.213 0 0 1 .548-1.657l-.002.002a2.033 2.033 0 0 1 1.545-.492l-.008-.001h.98v.903h-.96a.963.963 0 0 0-.78.251l.001-.001a1.393 1.393 0 0 0-.291.964v-.005a1.457 1.457 0 0 0 .281.998l-.003-.004a.983.983 0 0 0 .709.218h-.004h.454l1.431-3.33h1.52l1.713 4v-4h1.541l1.778 2.948V6.437h1.04v4.232h-1.444l-1.92-3.178v3.178zm-3.499-3.518l-.697 1.688h1.397zm-9.799 3.516H15.76V6.44h2.328a2.357 2.357 0 0 1 1.241.209l-.015-.006a.996.996 0 0 1 .514.871l-.002.07v-.003v.031a1.2 1.2 0 0 1-.706 1.094l-.008.003c.201.076.37.198.499.354l.002.002a1.213 1.213 0 0 1 .167.783l.001-.006v.831H18.76l-.004-.534v-.08a1.11 1.11 0 0 0-.163-.749l.003.005a.995.995 0 0 0-.744-.181l.006-.001h-1.085v1.54zm0-3.353v.94H18a.914.914 0 0 0 .505-.09l-.005.002a.437.437 0 0 0 .21-.373l-.001-.028v.001a.39.39 0 0 0-.211-.373l-.002-.001a1.025 1.025 0 0 0-.483-.08h.003zM6.056 10.674H4l-.389-.944H1.503l-.392.944h-1.1L1.824 6.44h1.503l1.721 4.007V6.44h1.651l1.324 2.871L9.24 6.44h1.685v4.232h-1.04L9.883 7.36l-1.467 3.313h-.888L6.057 7.355v3.318zM2.552 7.158l-.689 1.688h1.382zm18.888 3.515h-1.032V6.44h1.033v4.232zm-6.386 0H11.68V6.44h3.38v.88h-2.368v.763h2.311v.869H12.69v.846h2.368v.874z"/>
            </svg>
          </div>
          <hr className="mx-auto my-6 max-w-screen-xl border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

          <form className="max-w-sm mx-auto">
            <label htmlFor="cardholderName" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Cardholder Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 26 26" fill="#2256ee" aria-hidden="true" className="w-4 h-4 text-gray-500 dark:fill-gray-100"><path d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557"/></svg>
              </div>
              <input 
                type="text" 
                id="cardholderName" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ps-10 p-2.5  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="John Doe"
                required
              />
            </div>
            <label htmlFor="cardNumber" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Card Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 512 512" fill="#2256ee" aria-hidden="true" className="w-4 h-4 text-gray-500 dark:fill-gray-100"><path d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56"/></svg>
              </div>
              <input 
                type="text" 
                id="cardNumber" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ps-10 p-2.5  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="0123 4567 8901 2345"
                required
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>
            <div className="">
              <label htmlFor="expiryDate" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Expiry Date</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 text-gray-500 dark:fill-gray-100"><g fill="none"><rect width="18" height="15" x="3" y="6" stroke="#2256ee" strokeWidth="2" className="dark:stroke-gray-100" rx="2"/><path fill="#2256ee" className="dark:fill-gray-100" d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"/><path stroke="#2256ee" strokeLinecap="round" strokeWidth="2" className="dark:stroke-gray-100" d="M7 3v3m10-3v3"/></g></svg>
                </div>
                <input 
                  type="text" 
                  id="expiryDate" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ps-10 p-2.5  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                  placeholder="mm-yy"
                  required
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                />
              </div>
              <label htmlFor="cvv" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">CVV</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 1024 1024" fill="#2256ee" aria-hidden="true" className="w-4 h-4 text-gray-500 dark:fill-gray-100"><path d="M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394zM628 630H400V394h228z"/></svg>
                </div>
                <input 
                  type="text" 
                  id="cvv" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ps-10 p-2.5  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                  placeholder="123" 
                  maxLength={4}
                  required 
                  value={cvc}
                  onChange={handleCvcChange}
                />
              </div>
            </div>
            <label htmlFor="billingAddress" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Billing Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 20 20" fill="#2256ee" aria-hidden="true" className="w-4 h-4 text-gray-500 dark:fill-gray-100"><path d="m19.799 5.165l-2.375-1.83a1.997 1.997 0 0 0-.521-.237A2.035 2.035 0 0 0 16.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335M8.5 1h-1a.5.5 0 0 0-.5.5V5H3.664c-.166 0-.37.037-.567.099c-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235c.197.061.401.098.567.098H7v8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5"/></svg>
              </div>
              <input 
                type="text" 
                id="billingAddress" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ps-10 p-2.5  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="123 Main St"
                required
              />
            </div>
            <label htmlFor="email" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="#2256ee" aria-hidden="true" className="w-4 h-4 text-gray-500 dark:fill-gray-100"><path d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>
              </div>
              <input 
                type="email" 
                id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ps-10 p-2.5  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="name@spendwise.com"
                required
              />
            </div>

            <div className="flex mt-4">
              <div className="flex items-center mb-4">
                <input 
                  id="option-1" 
                  type="radio" 
                  name="pricing-plan" 
                  value="Invoicing Plan" 
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-primary-300 ml-[5px] dark:focus:ring-primary-600 dark:focus:bg-primary-600 dark:bg-gray-700 dark:border-gray-600"
                  required 
                />
                <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Invoicing Plan
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input 
                  id="option-2" 
                  type="radio" 
                  name="pricing-plan" 
                  value="Company Plan" 
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-primary-300 ml-[5px] dark:focus:ring-primary-600 dark:focus:bg-primary-600 dark:bg-gray-700 dark:border-gray-600"
                  required 
                />
                <label htmlFor="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Company Plan
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input 
                  id="option-3" 
                  type="radio" 
                  name="pricing-plan" 
                  value="Enterprise Plan" 
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-primary-300 ml-[5px] dark:focus:ring-primary-600 dark:bg-gray-700 dark:border-gray-600"
                  required 
                />
                <label htmlFor="country-option-3" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Enterprise Plan
                </label>
              </div>
            </div>
            <div className="flex items-start mb-5 ml-[5px]">
              <div className="flex items-center h-5">
                <input 
                  id="terms" 
                  type="checkbox" 
                  value="" 
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                  required 
                />
              </div>
              <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a></label>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm italic mb-4">{errorMessage}</p>
            )}

            <div>
              <input 
                type="submit" 
                value="Submit" 
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                onClick={handlePayment}
              />
            </div>
          </form>
        </div>
      </div>
      <BasicFooter />
    </div>
  );
};

export default Payment;
