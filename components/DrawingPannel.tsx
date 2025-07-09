import React, { useRef } from 'react';
import {
  DimensionValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Signature from 'react-native-signature-canvas';

interface DrawingPannelProps {
  text?: string;
  imageSource?: ImageSourcePropType;
  width?: DimensionValue;
  height?: DimensionValue;
  isLeft?: boolean;
  enableDrawing?: true;
}

const DrawingPannel: React.FC<DrawingPannelProps> = ({
  text,
  imageSource,
  width = '45%',
  height = '600%',
  isLeft = true,
  enableDrawing = false,
}) => {
  const ref = useRef<any>(null);

  const handleOK = (signature: string) => {
    console.log('🖌️ 그림 base64:', signature);
  };

  const handleClear = () => {
    ref.current?.clearSignature();
  };

  return (
    <View style={[styles.wrapper, isLeft ? styles.leftAlign : styles.rightAlign]}>
      <View style={[styles.bubbleContainer, { width, height }]}>
        {text && <Text style={styles.bubbleText}>{text}</Text>}
        {imageSource && <Image source={imageSource} style={styles.bubbleImage} />}
        {enableDrawing && (
          <>
            <View style={styles.signatureContainer}>
              <Signature
                ref={ref}
                onOK={handleOK}
                autoClear={false}
                imageType="image/png"
                descriptionText=""
                clearText="지우기"
                confirmText="확인"
                penColor="#000000"
                webStyle={signatureWebStyle}
                style={{ width: '100%', height: '100%' }}
              />
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={handleClear}
                style={[styles.button, { backgroundColor: '#555' }]}
              >
                <Text style={styles.buttonText}>전체 지우기</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const signatureWebStyle = `
  .m-signature-pad {
    box-shadow: none;
    border: none;
    height: 100%;
    background-color: white;
  }
  .m-signature-pad--body {
    border: none;
    height: 100%;
    background-color: white;
  }
  canvas {
    height: 100% !important;
    width: 100% !important;
    background-color: white !important;
    touch-action: none;
  }
  .m-signature-pad--footer {
    display: none;
  }
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: white;
    overflow: hidden;
  }
`;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
  },
  leftAlign: {
    alignSelf: 'flex-start',
  },
  rightAlign: {
    alignSelf: 'flex-end',
  },
  bubbleContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
    maxWidth: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  bubbleText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  bubbleImage: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  signatureContainer: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DrawingPannel;
