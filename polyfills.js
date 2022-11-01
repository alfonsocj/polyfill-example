import {polyfillGlobal} from 'react-native/Libraries/Utilities/PolyfillFunctions';
import {fetch, Headers, Request, Response} from 'react-native-fetch-api';
import {TextDecoder, TextEncoder} from 'text-encoding';
import {ReadableStream} from 'web-streams-polyfill/ponyfill/es6';
import {decode, encode} from 'base-64';

// polyfillGlobal('atob', () => decode);
// polyfillGlobal('btoa', () => encode);

// polyfillGlobal('TextEncoder', () => TextEncoder);
// polyfillGlobal('TextDecoder', () => TextDecoder);

// polyfillGlobal('ReadableStream', () => ReadableStream);

// polyfillGlobal('fetch', () => fetch);
// polyfillGlobal('Headers', () => Headers);
// polyfillGlobal('Request', () => Request);
// polyfillGlobal('Response', () => Response);
