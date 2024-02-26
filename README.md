# DoneWithIt

## Description

This is a mobile app that allows users to sell items they no longer need.

## Features

- Users can post items they want to sell
- Users can view items posted by other users
- Users can contact sellers to purchase items

## Technologies

- React Native
- Expo
- Node.js

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the app

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

    npm i react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens react-native-web

    npm i @react-navigation/native @react-navigation/stack @react-native-community/masked-view

    npm i expo expo-constants expo-image-picker expo-location expo-permissions

    npm i formik yup

    npm i -D @babel/core babel-preset-expo

## Error

NSRangeException: \*\*\* -[__NSArrayM objectAtIndexedSubscript:]: index 0 beyond bounds for empty array

RCTFatalException
facebook::react::invokeInner(RCTBridge*, RCTModuleData*, unsigned int, folly::dynamic const&, int, (anonymous namespace)::SchedulingContext)
facebook::react::RCTNativeModule::callSerializableNativeHook(unsigned int, folly::dynamic&&)
facebook::react::JSIExecutor::nativeCallSyncHook(facebook::jsi::Value const*, unsigned long)
std::\_\_1::function<facebook::jsi::Value (facebook::jsi::Runtime&, facebook::jsi::Value const&, facebook::jsi::Value const*, unsigned long)>::operator()(facebook::jsi::Runtime&, facebook::jsi::Value const&, facebook::jsi::Value const*, unsigned long) const
std::\_\_1::function<facebook::jsi::Value (facebook::jsi::Runtime&, facebook::jsi::Value const&, facebook::jsi::Value const*, unsigned long)>::operator()(facebook::jsi::Runtime&, facebook::jsi::Value const&, facebook::jsi::Value const*, unsigned long) const
facebook::hermes::HermesRuntimeImpl::HFContext::func(void*, hermes::vm::Runtime&, hermes::vm::NativeArgs)
hermes::vm::NativeFunction::\_nativeCall(hermes::vm::NativeFunction*, hermes::vm::Runtime&)
hermes::vm::Interpreter::handleCallSlowPath(hermes::vm::Runtime&, hermes::vm::PinnedHermesValue*)
hermes::vm::CallResult<hermes::vm::HermesValue, (hermes::vm::detail::CallResultSpecialize)2> hermes::vm::Interpreter::interpretFunction<false, false>(hermes::vm::Runtime&, hermes::vm::InterpreterState&)
hermes::vm::Runtime::interpretFunctionImpl(hermes::vm::CodeBlock*)
hermes::vm::Runtime::runBytecode(std::**1::shared_ptr<hermes::hbc::BCProviderBase>&&, hermes::vm::RuntimeModuleFlags, llvh::StringRef, hermes::vm::Handle<hermes::vm::Environment>, hermes::vm::Handle<hermes::vm::HermesValue>)
facebook::hermes::HermesRuntimeImpl::evaluatePreparedJavaScript(std::**1::shared_ptr<facebook::jsi::PreparedJavaScript const> const&)
facebook::hermes::HermesRuntime::evaluateJavaScriptWithSourceMap(std::**1::shared_ptr<facebook::jsi::Buffer const> const&, std::**1::shared_ptr<facebook::jsi::Buffer const> const&, std::**1::basic_string<char, std::**1::char_traits<char>, std::**1::allocator<char>> const&)
facebook::hermes::HermesRuntimeImpl::evaluateJavaScript(std::**1::shared_ptr<facebook::jsi::Buffer const> const&, std::**1::basic_string<char, std::**1::char_traits<char>, std::**1::allocator<char>> const&)
facebook::jsi::WithRuntimeDecorator<facebook::react::(anonymous namespace)::ReentrancyCheck, facebook::jsi::Runtime, facebook::jsi::Runtime>::evaluateJavaScript(std::**1::shared_ptr<facebook::jsi::Buffer const> const&, std::**1::basic_string<char, std::**1::char_traits<char>, std::**1::allocator<char>> const&)
facebook::react::JSIExecutor::loadBundle(std::**1::unique_ptr<facebook::react::JSBigString const, std::**1::default_delete<facebook::react::JSBigString const>>, std::**1::basic_string<char, std::**1::char_traits<char>, std::**1::allocator<char>>)
std::**1::**function::**func<facebook::react::NativeToJsBridge::loadBundle(std::**1::unique_ptr<facebook::react::RAMBundleRegistry, std::**1::default_delete<facebook::react::RAMBundleRegistry>>, std::**1::unique_ptr<facebook::react::JSBigString const, std::**1::default_delete<facebook::react::JSBigString const>>, std::**1::basic_string<char, std::**1::char_traits<char>, std::**1::allocator<char>>)::$_1, std::__1::allocator<facebook::react::NativeToJsBridge::loadBundle(std::__1::unique_ptr<facebook::react::RAMBundleRegistry, std::__1::default_delete<facebook::react::RAMBundleRegistry>>, std::__1::unique_ptr<facebook::react::JSBigString const, std::__1::default_delete<facebook::react::JSBigString const>>, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>>)::$\_1>, void (facebook::react::JSExecutor*)>::operator()(facebook::react::JSExecutor*&&)
std::**1::**function::**func<facebook::react::NativeToJsBridge::runOnExecutorQueue(std::**1::function<void (facebook::react::JSExecutor*)>)::$_8, std::__1::allocator<facebook::react::NativeToJsBridge::runOnExecutorQueue(std::__1::function<void (facebook::react::JSExecutor*)>)::$\_8>, void ()>::operator()()
facebook::react::tryAndReturnError(std::**1::function<void ()> const&)
facebook::react::RCTMessageThread::tryFunc(std::**1::function<void ()> const&)
invocation function for block in facebook::react::RCTMessageThread::runAsync(std::**1::function<void ()>)
**CFRUNLOOP_IS_CALLING_OUT_TO_A_BLOCK\_\_
**CFRunLoopDoBlocks
**CFRunLoopRun
CFRunLoopRunSpecific +[RCTCxxBridge runRunLoop]
**NSThread**start\_\_
\_pthread_start
thread_start
