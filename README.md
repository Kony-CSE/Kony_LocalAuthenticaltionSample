# Kony_LocalAuthenticaltionSample

This application coordinates access to the fingerprint hardware for authenticating a user locally.

Purpose:

This API coordinates access to the fingerprint hardware for authenticating a user locally. 
Fingerprint hardware which is a biometric fingerprint reader that takes the place on the devices where manufacture’s integrated. Using this API the user can authenticate various payments, unlock the device and so forth. Finger print API is securely stored in the secure enclave of the device and is not accessible outside. 
Hence this authentication mechanism is very secure.

Requirements:

1) Application must be in the foreground (this doesn't work with background processes).                                          
2) If any application uses local authentication method with touch id, it is the apps responsibility for handling all errors and properly responding with UI/UX to ensure there is an alternative method for logging into the app.

Suppported Channels:

iPhone                                                                                                                      
Android                                                                                                                       

Supported Version:

6.5 and Above 

