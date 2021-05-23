

const handRaiseGesture = new fp.GestureDescription('hand_raise');


handRaiseGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
//thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
//thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.5);
//thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 0.5);

// do this for all other fingers
handRaiseGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
handRaiseGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
handRaiseGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
handRaiseGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);