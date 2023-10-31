import { State } from './verifier/VerifierService';

export interface Actions {
  [name: string]: any;
}

export interface IntermediateState {
  name: State;
  data: object;
  actions: Actions;
}

export interface IdleState extends IntermediateState {
  name: State.IDLE;
  data: object;
  actions: { startAdvertisement: () => void };
}

export interface AdvertisingState extends IntermediateState {
  name: State.ADVERTISING;
  data: { uri: string };
  actions: { stopAdvertising: () => void };
}

export interface ConnectedState extends IntermediateState {
  name: State.CONNECTED;
  data: {};
  actions: { disconnect: () => void };
}

export interface SecureConnectionEstablishedState extends IntermediateState {
  name: State.SECURE_CONNECTION_ESTABLISHED;
  data: {};
  actions: { sendRequest: () => void; disconnect: () => void };
}

export interface RequestedState extends IntermediateState {
  name: State.REQUESTED;
  data: {};
  actions: { disconnect: () => void };
}

export interface ReceivedState extends IntermediateState {
  name: State.RECEIVED;
  data: { vc: string };
  actions: {};
}

export interface ErrorState extends IntermediateState {
  name: State.ERROR;
  data: { errorCode: string; errorMessage: string };
  actions: {};
}

export interface Config {
  deviceName: string;
}
