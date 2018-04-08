import web3 from './web3';
//we need a way to access the contract ABI => this is in our build/CampaignFactory.json file
import EventFactory from './build/EventFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(EventFactory.interface),
  //RINKEBY: '0xAe357d2b0749455BFd483983C4311d0EfE90DeD6'
  '0xAe357d2b0749455BFd483983C4311d0EfE90DeD6'
);

export default instance;
