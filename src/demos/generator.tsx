import React, { useRef, useState } from 'react';
import {
  BizDescriptions,
  BizForm,
  BizFormItemColor,
  BizFormItemNumber,
  BizFormItemRadio,
  BizFormItemSelect,
  BizFormItemUpload,
} from 'antd-more';
import createPuzzle, { Result } from 'create-puzzle';
import { Affix, Alert, Button, Card, Col, Empty, message, Radio, Row, Spin } from 'antd';
import styles from './generator.less';

// 输入类型
enum InputType {
  Custom,
  Default,
}
const LocationTypeOptions = [
  {
    label: '随机',
    value: InputType.Default,
  },
  {
    label: '自定义',
    value: InputType.Custom,
  },
];
const ImageWidthTypeOptions = [
  {
    label: '图片宽度',
    value: InputType.Default,
  },
  {
    label: '自定义',
    value: InputType.Custom,
  },
];
const ImageHeightTypeOptions = [
  {
    label: '图片高度',
    value: InputType.Default,
  },
  {
    label: '自定义',
    value: InputType.Custom,
  },
];
// 拼图点选项
const PointsOptions = [
  {
    label: '2/3/4',
    value: '',
  },
  {
    label: '2',
    value: 2,
  },
  {
    label: '3',
    value: 3,
  },
  {
    label: '4',
    value: 4,
  },
];
// 导出图片类型
const ImageTypeOptions = [
  {
    label: 'jpeg',
    value: 'image/jpeg',
  },
  {
    label: 'png',
    value: 'image/png',
  },
];

// 拼图等高类型
enum PuzzleEqualHeightType {
  Yes,
  No,
}
const PuzzleEqualHeightTypeOptions = [
  {
    label: '等高',
    value: PuzzleEqualHeightType.Yes,
  },
  {
    label: '不等高',
    value: PuzzleEqualHeightType.No,
  },
];

const colspan = {
  sm: 12,
  xs: 24,
};

const cacheURL: string[] = [];

function Demo() {
  const [form] = BizForm.useForm();
  const typeX = BizForm.useWatch(['typeX'], form);
  const typeY = BizForm.useWatch(['typeY'], form);
  const bgWidthType = BizForm.useWatch(['bgWidthType'], form);
  const bgHeightType = BizForm.useWatch(['bgHeightType'], form);

  const [puzzleEqualType, setPuzzleEqualType] = useState(PuzzleEqualHeightType.Yes);
  const [result, setResult] = useState<Result>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const countRef = useRef(1);

  function create(values?: any) {
    const {
      img,
      typeX: internalTypeX,
      typeY: internalTypeY,
      offsetX,
      offsetY,
      bgWidthType,
      bgHeightType,
      bgWidth: internalBgWidth,
      bgHeight: internalBgHeight,
      bgOffsetX,
      bgOffsetY,
      ...restValues
    } = values || form.getFieldsValue();

    if (!Array.isArray(img) || !img[0]) {
      message.error('请上传图片');
      return;
    }

    const count = countRef.current;

    setLoading(true);

    const url = URL.createObjectURL(img[0]?.originFileObj || img[0]);
    const x = internalTypeX === InputType.Default ? undefined : offsetX;
    const y = internalTypeY === InputType.Default ? undefined : offsetY;
    const bgWidth = bgWidthType === InputType.Default ? undefined : internalBgWidth;
    const bgHeight = bgHeightType === InputType.Default ? undefined : internalBgHeight;
    const bgOffset = [bgOffsetX, bgOffsetY];

    cacheURL.push(url);

    createPuzzle(url, {
      x,
      y,
      bgWidth,
      bgHeight,
      bgOffset,
      ...restValues,
    })
      .then((res) => {
        if (count === countRef.current) {
          setError(null);
          setResult(res);
          console.log(res);
        }
      })
      .catch((err) => {
        if (count === countRef.current) {
          setResult(undefined);
          setError(err);
        }
      })
      .finally(() => {
        if (count === countRef.current) {
          setLoading(false);
        }
        if (cacheURL.length > 0) {
          while (cacheURL.length) {
            URL.revokeObjectURL(cacheURL.pop()!);
          }
        }
      });
  }

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col {...colspan}>
          <BizForm
            form={form}
            submitter={false}
            labelWidth={98}
            initialValues={{
              typeX: InputType.Default,
              typeY: InputType.Default,
              offsetX: 0,
              offsetY: 0,
              width: 60,
              height: 60,
              margin: 2,
              points: PointsOptions[0].value,
              borderWidth: 2,
              borderColor: 'rgba(255,255,255,0.7)',
              fillColor: 'rgba(255,255,255,0.7)',

              bgWidthType: InputType.Default,
              bgHeightType: InputType.Default,
              bgOffsetX: 0,
              bgOffsetY: 0,
              bgImageType: ImageTypeOptions[0].value,
              bgImageEncoderOptions: 0.92,
            }}
            onValuesChange={(_, values) => {
              countRef.current += 1;
              create(values);
            }}
          >
            <BizFormItemUpload
              type="avatar"
              name="img"
              title="点击上传图片"
              extra="上传后再点击图片也可以重新上传"
              className={styles.itemUpload}
            />
            <Card title="配置项" size="small">
              <Card
                title="拼图"
                size="small"
                type="inner"
                extra={
                  (typeX === InputType.Default || typeY === InputType.Default) && (
                    <Button
                      type="link"
                      size="small"
                      style={{ margin: '-1px 0' }}
                      onClick={() => {
                        countRef.current += 1;
                        create();
                      }}
                    >
                      重新随机生成
                    </Button>
                  )
                }
              >
                <BizFormItemRadio
                  label="x 轴偏移"
                  name="typeX"
                  options={LocationTypeOptions}
                  className={styles.itemWrapperFlexNone}
                  contentAfter={
                    <BizFormItemNumber
                      name="offsetX"
                      precision={0}
                      inputProps={{
                        min: 0,
                      }}
                      hidden={typeX !== InputType.Custom}
                      style={{ margin: 0 }}
                    />
                  }
                />
                <BizFormItemRadio
                  label="y 轴偏移"
                  name="typeY"
                  options={LocationTypeOptions}
                  className={styles.itemWrapperFlexNone}
                  contentAfter={
                    <BizFormItemNumber
                      name="offsetY"
                      precision={0}
                      inputProps={{
                        min: 0,
                      }}
                      hidden={typeY !== InputType.Custom}
                      style={{ margin: 0 }}
                    />
                  }
                />
                <Row>
                  <Col {...colspan}>
                    <BizFormItemNumber
                      label="宽度"
                      name="width"
                      precision={0}
                      inputProps={{ min: 20 }}
                    />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemNumber
                      label="高度"
                      name="height"
                      precision={0}
                      inputProps={{ min: 20 }}
                    />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemNumber label="留白" name="margin" precision={0} />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemSelect label="随机拼图点" name="points" options={PointsOptions} />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemNumber label="描边宽度" name="borderWidth" precision={0} />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemColor label="描边颜色" name="borderColor" colorMode="rgb" />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemColor label="填充颜色" name="fillColor" colorMode="rgb" />
                  </Col>
                </Row>
              </Card>
              <Card title="背景图" size="small" type="inner">
                <BizFormItemRadio
                  label="宽度"
                  name="bgWidthType"
                  options={ImageWidthTypeOptions}
                  className={styles.itemWrapperFlexNone}
                  contentAfter={
                    <BizFormItemNumber
                      name="bgWidth"
                      precision={0}
                      inputProps={{
                        min: 0,
                      }}
                      hidden={bgWidthType !== InputType.Custom}
                      style={{ margin: 0 }}
                    />
                  }
                />
                <BizFormItemRadio
                  label="高度"
                  name="bgHeightType"
                  options={ImageHeightTypeOptions}
                  className={styles.itemWrapperFlexNone}
                  contentAfter={
                    <BizFormItemNumber
                      name="bgHeight"
                      precision={0}
                      inputProps={{
                        min: 0,
                      }}
                      hidden={bgHeightType !== InputType.Custom}
                      style={{ margin: 0 }}
                    />
                  }
                />
                <Row>
                  <Col {...colspan}>
                    <BizFormItemNumber label="x 轴偏移" name="bgOffsetX" precision={0} />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemNumber label="y 轴偏移" name="bgOffsetY" precision={0} />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemRadio
                      label="导出图片类型"
                      name="bgImageType"
                      options={ImageTypeOptions}
                    />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemNumber
                      label="导出图片质量"
                      name="bgImageEncoderOptions"
                      precision={2}
                    />
                  </Col>
                </Row>
              </Card>
            </Card>
          </BizForm>
        </Col>
        <Col {...colspan}>
          <Affix>
            <Card
              title="生成结果"
              size="small"
              bodyStyle={{
                maxHeight: 'calc(100vh - 80px)',
                overflowY: 'auto',
              }}
              className={styles.result}
            >
              {result ? (
                <Spin spinning={loading} delay={300}>
                  <BizDescriptions
                    column={1}
                    labelStyle={{ width: 98, justifyContent: 'flex-end' }}
                  >
                    <BizDescriptions.Item
                      label="背景图"
                      tooltip="背景图展示比例可能有缩放，不影响图片实际大小"
                    >
                      <div style={{ overflow: 'hidden' }}>
                        <img src={result.bgUrl} alt="背景图" />
                      </div>
                    </BizDescriptions.Item>
                    <BizDescriptions.Item label="拼图类型" tooltip="等高不需要 y 轴">
                      <Radio.Group
                        optionType="button"
                        value={puzzleEqualType}
                        onChange={(e) => setPuzzleEqualType(e.target.value)}
                        options={PuzzleEqualHeightTypeOptions}
                      />
                    </BizDescriptions.Item>
                    <BizDescriptions.Item label="拼图">
                      <img
                        src={
                          puzzleEqualType === PuzzleEqualHeightType.Yes
                            ? result.puzzleUrl
                            : result.singlePuzzleUrl
                        }
                        alt="拼图"
                      />
                    </BizDescriptions.Item>
                    <BizDescriptions.Item label="x 轴偏移">{result.x}</BizDescriptions.Item>
                    {puzzleEqualType === PuzzleEqualHeightType.No && (
                      <BizDescriptions.Item label="y 轴偏移">
                        {result.singlePuzzleY}
                      </BizDescriptions.Item>
                    )}
                  </BizDescriptions>
                </Spin>
              ) : error ? (
                <Alert
                  type="error"
                  message="Warning"
                  description={JSON.stringify(error)}
                  showIcon
                />
              ) : (
                <Empty description="请上传图片" />
              )}
            </Card>
          </Affix>
        </Col>
      </Row>
    </div>
  );
}

export default Demo;
