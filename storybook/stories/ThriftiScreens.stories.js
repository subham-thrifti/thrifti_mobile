import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { STORES, STORES_GROUPED_BY_FIRST_ALPHABET, FAV_STORES, NEARBY_STORES,
  PRODUCT_CATEGORIES, SELECTED_PRODUCTS_LIST } from '../../Components/Constants/mockData'
import CustomContainer from '../../Components/Common/CustomContainer';

import WelcomBack from '../../Components/screens/WelcomBack';
import GetStarted from '../../Components/screens/GetStarted';
import EnterVerificationCode from '../../Components/screens/EnterVerificationCode';
import SetPassword from '../../Components/screens/SetPassword';
import SetPin from '../../Components/screens/SetPin';
import EnterName from '../../Components/screens/EnterName';
import EnterPhoneNumber from '../../Components/screens/EnterPhoneNumber';
import EnterDob from '../../Components/screens/EnterDob';
import ChooseSavingGoals from '../../Components/screens/ChooseSavingGoals';
import ChooseTreeLocation from '../../Components/screens/ChooseTreeLocation';
import ChooseCountry from '../../Components/screens/ChooseCountry';
import AddCreditCard from '../../Components/screens/CreditCard/AddCreditCard';
import ScanCard from '../../Components/screens/CreditCard/ScanCard';
import CreditCardManualDetail from '../../Components/screens/CreditCard/CreditCardManualDetail';
import EnterCreditLimit from '../../Components/screens/CreditCard/EnterCreditLimit';
import EnterDueDates from '../../Components/screens/CreditCard/EnterDueDates';


import SplashScreen from '../../Components/screens/grocery/SplashScreen';
import Intro from '../../Components/screens/grocery/Intro';
import SelectFavStore from '../../Components/screens/grocery/SelectFavStore';
import AddCard from '../../Components/screens/grocery/AddCard';
import ChooseSuperMarket from '../../Components/screens/grocery/ChooseSuperMarket';
import ManualCardData from '../../Components/screens/grocery/ManualCardData'
import CardSuccess from '../../Components/screens/grocery/CardSuccess'
import ChooseStore from '../../Components/screens/grocery/ChooseStore'
import ProductCategories from '../../Components/screens/grocery/ProductCategories'
import ShoppingList from '../../Components/screens/grocery/ShoppingList'
import LoadingStoreRecommendation from '../../Components/screens/grocery/LoadingStoreRecommendation'
import RecommendedAltStore from '../../Components/screens/grocery/RecommendedAltStore'
import StoreWiseShoppingList from '../../Components/screens/grocery/StoreWiseShoppingList'
import EnterEmail from '../../Components/screens/grocery/WaitingList/EnterEmail'
import EarlyAccessWaitingMessage from '../../Components/screens/grocery/WaitingList/EarlyAccessWaitingMessage';
import JoinWaitingList from '../../Components/screens/grocery/WaitingList/JoinWaitingList';
import countries from '../countries'


storiesOf('WelcomeBack', module)
  .add('plain example', () => (<CustomContainer>
      <WelcomBack moveToPage={action('clicked-login')}/>
    </CustomContainer>));


storiesOf('GetStarted', module)
  .add('plain example', () => (<CustomContainer>
      <GetStarted
        onPressGetStarted={action('clicked-getstarted')}
        onPressContinueWithPhone={action('clicked-ContinueWithPhone')} />
    </CustomContainer>));

storiesOf('EnterVerificationCode', module)
  .add('plain example', () => (<CustomContainer>
      <EnterVerificationCode
        onPressResendCode={action('clicked-Resend Code')}
        onPressVerificationCode={action('clicked-Continue')}/>
    </CustomContainer>))
  .add('Error', () => (<CustomContainer>
      <EnterVerificationCode
        isError={true}
        onPressResendCode={action('clicked-Resend Code')}
        onPressVerificationCode={action('clicked-Continue')}/>
    </CustomContainer>));

storiesOf('SetPassword', module)
  .add('plain example', () => (<CustomContainer>
      <SetPassword moveToPage={action('clicked-getstarted')}/>
    </CustomContainer>));

storiesOf('SetPin', module)
  .add('plain example', () => (<CustomContainer>
      <SetPin moveToPage={action('clicked-getstarted')}/>
    </CustomContainer>));
    
storiesOf('EnterName', module)
  .add('plain example', () => (<CustomContainer>
      <EnterName moveToPage={action('clicked-getstarted')}/>
    </CustomContainer>));

storiesOf('EnterPhoneNumber', module)
  .add('plain example', () => (<CustomContainer>
      <EnterPhoneNumber moveToPage={action('clicked-button')}/>
    </CustomContainer>));

storiesOf('EnterDob', module)
  .add('plain example', () => (<CustomContainer>
      <EnterDob moveToPage={action('clicked-on-continue')}/>
    </CustomContainer>));
    
storiesOf('ChooseSavingGoals', module)
  .add('plain example', () => (<CustomContainer>
      <ChooseSavingGoals onGoalSelect={action('selected-goal')}/>
    </CustomContainer>));

storiesOf('ChooseTreeLocation', module)
  .add('plain example', () => (<CustomContainer>
      <ChooseTreeLocation onSelfDecide={action('self')} onThriftiDecide={action('thrifti')}/>
    </CustomContainer>));


storiesOf('ChooseCountry', module)
  .add('plain example', () => (<CustomContainer>
      <ChooseCountry onSelectCountry={action('selected country')} countries={countries} onPressBack={action('Go Back')}/>
    </CustomContainer>));


storiesOf('AddCreditCard', module)
  .add('First Screen', () => (<CustomContainer>
      <AddCreditCard onContinue={action('Add Credit Card')} />
    </CustomContainer>))
  .add('Scan Card', () => (<CustomContainer>
      <ScanCard onContinue={action('ScanCard')} />
    </CustomContainer>))
  .add('Manual Details', () => (<CustomContainer>
      <CreditCardManualDetail
        onPressBack={action('Back')}
        onPressNext={action('Next')}
        onPressSkip={action('Skip for now')}
        onPressContinue={action('Continue')}
      />
    </CustomContainer>))
  .add('Enter Credit Limit', () => (<CustomContainer>
      <EnterCreditLimit
        onPressBack={action('Back')}
        onPressEnterManually={action('Enter Manually')}
        onPressDone={action('Done')}
        onPressContinue={action('Continue')}
        onPressContinueToAddDueDates={action('Continue to add due dates')}
        onPressSkipDueDates={action('Skip Due Dates')}
      />
    </CustomContainer>))
  .add('Enter Due Dates', () => (<CustomContainer>
      <EnterDueDates
        onPressBack={action('Back')}
        onPressDone={action('Done')}
        onPressContinueAfterAlerts={action('Prior Days')}
      />
    </CustomContainer>));



/// Grocery
storiesOf('Grocery', module)
  .add('Splash Screen', () => (<SplashScreen />))
  .add('Intro Screens', () => (<CustomContainer>
    <Intro registerZipCodeFromUser={action('Zipcode')}/>
  </CustomContainer>))
  .add('Select Fav Store', () => (<CustomContainer>
    <SelectFavStore stores={STORES} onPressContinue={action('selected stores')} onPressSkip={action('Skipped')}/>
  </CustomContainer>))
  .add('Add Card', () => (<CustomContainer>
    <AddCard stores={STORES} onPressAddNewCard={action('Add new card')} onPressSkip={action('Skipped')}/>
  </CustomContainer>))
  .add('Choose SuperMarket', () => (<CustomContainer>
    <ChooseSuperMarket stores={STORES_GROUPED_BY_FIRST_ALPHABET} onPressAddNewCard={action('ChooseSupermarket')} onPressSkip={action('Skipped')}/>
  </CustomContainer>))
  .add('Manual card number', () => (<CustomContainer>
    <ManualCardData isBottomSheetVisible={true} onManualCardDetailsEnter={action('onManualCardDetailsEnter')} />
  </CustomContainer>))
  .add('Card Added Successfully', () => (<CustomContainer>
      <CardSuccess  onPressBtn={action('Button Pressed')}/>
    </CustomContainer>))
    .add('Choose Store', () => (<CustomContainer>
      <ChooseStore favStores={FAV_STORES} nearbyStores={NEARBY_STORES} onPressContinue={action('selected stores')} onPressBack={action('Back')}/>
    </CustomContainer>))
     .add('Product Categories', () => (<CustomContainer>
      <ProductCategories store={{label: 'Loblaws', value: 'LOBLAW'}} productCategories={PRODUCT_CATEGORIES} onSelectItem={action("Selected Item")} onPressContinue={action('selected stores')} onPressBack={action('Back')}/>
    </CustomContainer>))
    .add('Shopping List', () => (<CustomContainer>
      <ShoppingList shoppingListTitle={'Loblaws Shopping List'} productList={SELECTED_PRODUCTS_LIST.slice(3)} onPressContinue={action("Pressed Continue")}  onPressBack={action('Back')} />
    </CustomContainer>))
    .add('Fetching best Stores Recommendation', () => (<CustomContainer>
      <LoadingStoreRecommendation />
    </CustomContainer>))
    .add('Recommended Alt Store', () => (<CustomContainer>
      <RecommendedAltStore const selectedStore={{ ...STORES[0], cartValue: 100}} recommendedStore={{...STORES[1], cartValue: 70}} onPressBtn={action('customer decision')}/>
    </CustomContainer>))
    .add('Store wise shopping List ', () => (<CustomContainer>
      <StoreWiseShoppingList stores={STORES.slice(4)}/>
    </CustomContainer>));

    storiesOf('Waiting List', module)
    .add('Enter Email', () => (<CustomContainer>
      <EnterEmail onPressJoinWaitingList={action('Email is ')}/>
    </CustomContainer>))
    .add('Early Access Message', () => (<CustomContainer>
      <EarlyAccessWaitingMessage customerWaitingCount={'24,523'} totalWaitingCount={'24,523'} onPressShare={action('Share & Invite pressed')} />
    </CustomContainer>))
    .add('Join Waiting List', () => (<CustomContainer>
      <JoinWaitingList onPressJoinWaitingList={action('Join Waiting List')} />
    </CustomContainer>));
