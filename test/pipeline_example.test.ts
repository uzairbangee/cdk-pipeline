import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as PipelineExample from '../lib/pipeline_example-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new PipelineExample.PipelineExampleStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
