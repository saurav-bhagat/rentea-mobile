# Start the application

- expo start ([expo](https://docs.expo.io/) should be installed globally)

# Debug

- Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- Open a new tab with port 19001
- on expo start, it will automatically take up the openend debugger

# colors: 

blue - `#109FDA`
grey - `#666666`

# Useful Links

* https://ethercreative.github.io/react-native-shadow-generator/

## caveats

1. Using this package, '@twotalltotems/react-native-otp-input' creates a hard dependency on its version
   since it required clipboard package. If any problem occurs later, fallback to this package:
   react-native-otp-textinput

2. `react-native-size-matters` - We have followed these conventions: *font-size* - 'value@ms0.3' , *margin/		padding/height/width* - Usually 'value@ms', can be 'value@s' as per design needs.