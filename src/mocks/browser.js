import { http, HttpResponse, ws } from 'msw';
import { setupWorker } from 'msw/browser';

const stantardGetEndpoint = (endpoint, data) => {
  const url = `http://localhost:3000/${endpoint}`;

  return http.get(url, () => {
    return HttpResponse.json({
      data,
      status: 200,
      links: {
        self: url,
        next: null,
      },
      pages: {
        self: 1,
        first: 1,
        next: null,
        last: null,
      },
    });
  });
};

const rawGetEndpoint = (url, data) => {
  return http.get(url, () => {
    return HttpResponse.json(data);
  });
};

const wsApi = ws.link('ws://localhost:3000/api/ws');

export const worker = setupWorker(
  stantardGetEndpoint('api/runs', [
    {
      flow_id: 'BasicFlow',
      run_number: 1,
      user_name: 'SanteriCM',
      user: 'SanteriCM',
      ts_epoch: 1595574762958,
      tags: ['testingtag'],
      status: 'completed',
      system_tags: ['user:SanteriCM'],
    },
    {
      flow_id: 'BasicFlow',
      run_number: 2,
      user_name: 'SanteriCM',
      user: 'SanteriCM',
      ts_epoch: 1595574763000,
      tags: ['testingtag'],
      status: 'running',
      system_tags: ['user:SanteriCM'],
    },
    {
      flow_id: 'BasicFlow',
      run_number: 3,
      user_name: 'SanteriCM',
      user: 'SanteriCM',
      ts_epoch: 1595574764000,
      tags: ['testingtag'],
      status: 'failed',
      system_tags: ['user:SanteriCM'],
    },
    {
      flow_id: 'NewFlow',
      run_number: 4,
      user_name: 'SanteriCM',
      user: 'SanteriCM',
      ts_epoch: 1595574764000,
      tags: ['testingtag'],
      status: 'completed',
      system_tags: ['user:SanteriCM'],
    },
    {
      flow_id: 'NewFlow',
      run_number: 5,
      user_name: 'SanteriCM',
      user: 'SanteriCM',
      ts_epoch: 1595574464000,
      tags: ['testingtag'],
      status: 'completed',
      system_tags: ['user:SanteriCM'],
    },
  ]),
  stantardGetEndpoint('api/flows/:flowid/runs/:runid', {
    flow_id: 'BasicFlow',
    run_number: 1,
    user_name: 'SanteriCM',
    user: 'SanteriCM',
    ts_epoch: 1739390473221,
    tags: ['testingtag'],
    status: 'completed',
    system_tags: ['user:SanteriCM'],
  }),
  stantardGetEndpoint('api/flows/:flowid/runs/:id/metadata', [
    {
      id: 2341,
      flow_id: 'BasicFlow',
      run_number: 59959,
      run_id: null,
      step_name: 'start',
      task_id: 492813,
      task_name: null,
      attempt_id: 0,
      field_name: 'kubernetes-pod-service-account-name',
      value: 'default',
      type: 'kubernetes-pod-service-account-name',
      user_name: 'santeri@outerbounds.co',
      ts_epoch: 1738118048513,
      tags: ['attempt_id:0'],
      system_tags: null,
    },
  ]),
  stantardGetEndpoint('api/flows/:flowid/runs/:runid/parameters', {}),
  stantardGetEndpoint('api/flows/:flowid/runs/:runid/artifacts', {}),
  stantardGetEndpoint('api/flows/:flowid/runs/:runid/steps', [
    {
      flow_id: 'BasicFlow',
      run_number: 1,
      run_id: '1',
      step_name: '_parameters',
      user_name: 'santeri@outerbounds.co',
      ts_epoch: 1739390473221,
      duration: 2371,
      tags: [],
      system_tags: [
        'user:santeri@outerbounds.co',
        'metaflow_version:2.12.30.1',
        'python_version:3.12.7',
        'runtime:dev',
      ],
    },
    {
      flow_id: 'BasicFlow',
      run_number: 1,
      run_id: '1',
      step_name: 'start',
      user_name: 'santeri@outerbounds.co',
      ts_epoch: 1739390475901,
      duration: 99763,
      tags: [],
      system_tags: [
        'user:santeri@outerbounds.co',
        'metaflow_version:2.12.30.1',
        'python_version:3.12.7',
        'runtime:dev',
      ],
    },
    {
      flow_id: 'BasicFlow',
      run_number: 60690,
      run_id: '60690',
      step_name: 'a',
      user_name: 'santeri@outerbounds.co',
      ts_epoch: 1739390587525,
      duration: 150987,
      tags: [],
      system_tags: [
        'user:santeri@outerbounds.co',
        'metaflow_version:2.12.30.1',
        'python_version:3.12.7',
        'runtime:dev',
      ],
    },
    {
      flow_id: 'BasicFlow',
      run_number: 60690,
      run_id: '60690',
      step_name: 'end',
      user_name: 'santeri@outerbounds.co',
      ts_epoch: 1739390827924,
      duration: 14691,
      tags: [],
      system_tags: [
        'user:santeri@outerbounds.co',
        'metaflow_version:2.12.30.1',
        'python_version:3.12.7',
        'runtime:dev',
      ],
    },
  ]),
  stantardGetEndpoint('api/flows/:flowid/runs/:runid/tasks', [
    {
      flow_id: 'BasicFlow',
      run_number: 1,
      run_id: null,
      step_name: '_parameters',
      task_id: 520361,
      task_name: null,
      user_name: 'santeri@outerbounds.co',
      status: 'unknown',
      task_ok: ':root:s3',
      ts_epoch: 1739390473374,
      started_at: null,
      finished_at: 1739390475592,
      duration: 2218,
      attempt_id: 0,
      tags: [],
      system_tags: [
        'user:santeri@outerbounds.co',
        'metaflow_version:2.12.30.1',
        'python_version:3.12.7',
        'runtime:dev',
      ],
      last_heartbeat_ts: 1739390473,
    },
    {
      flow_id: 'BasicFlow',
      run_number: 1,
      run_id: null,
      step_name: 'start',
      task_id: 520362,
      task_name: null,
      user_name: 'santeri@outerbounds.co',
      status: 'completed',
      task_ok: null,
      ts_epoch: 1739390476078,
      started_at: 1739390574312,
      finished_at: 1739390575664,
      duration: 1352,
      attempt_id: 0,
      tags: [],
      system_tags: [
        'user:santeri@outerbounds.co',
        'metaflow_version:2.12.30.1',
        'python_version:3.12.7',
        'runtime:dev',
      ],
      last_heartbeat_ts: 1739390574,
    },
    {
      flow_id: 'BasicFlow',
      run_number: 1,
      run_id: null,
      step_name: 'a',
      task_id: 520363,
      task_name: null,
      user_name: 'santeri@outerbounds.co',
      status: 'completed',
      task_ok: null,
      ts_epoch: 1739390587807,
      started_at: 1739390609628,
      finished_at: 1739390730399,
      duration: 120771,
      attempt_id: 0,
      tags: [],
      system_tags: [
        'user:santeri@outerbounds.co',
        'metaflow_version:2.12.30.1',
        'python_version:3.12.7',
        'runtime:dev',
      ],
      last_heartbeat_ts: 1739390730,
    },
    {
      flow_id: 'BasicFlow',
      run_number: 1,
      run_id: null,
      step_name: 'a',
      task_id: 520364,
      task_name: null,
      user_name: 'santeri@outerbounds.co',
      status: 'completed',
      task_ok: null,
      ts_epoch: 1739390588764,
      started_at: 1739390607654,
      finished_at: 1739390728578,
      duration: 120924,
      attempt_id: 0,
      tags: [],
      system_tags: [
        'user:santeri@outerbounds.co',
        'metaflow_version:2.12.30.1',
        'python_version:3.12.7',
        'runtime:dev',
      ],
      last_heartbeat_ts: 1739390728,
    },
    {
      flow_id: 'BasicFlow',
      run_number: 1,
      run_id: null,
      step_name: 'a',
      task_id: 520365,
      task_name: null,
      user_name: 'santeri@outerbounds.co',
      status: 'completed',
      task_ok: null,
      ts_epoch: 1739390589738,
      started_at: 1739390600558,
      finished_at: 1739390721596,
      duration: 121038,
      attempt_id: 0,
      tags: [],
      system_tags: [
        'user:santeri@outerbounds.co',
        'metaflow_version:2.12.30.1',
        'python_version:3.12.7',
        'runtime:dev',
      ],
      last_heartbeat_ts: 1739390721,
    },
    {
      flow_id: 'BasicFlow',
      run_number: 1,
      run_id: null,
      step_name: 'a',
      task_id: 520366,
      task_name: null,
      user_name: 'santeri@outerbounds.co',
      status: 'failed',
      task_ok: null,
      ts_epoch: 1739390590523,
      started_at: 1739390617634,
      finished_at: 1739390738512,
      duration: 120878,
      attempt_id: 0,
      tags: [],
      system_tags: [
        'user:santeri@outerbounds.co',
        'metaflow_version:2.12.30.1',
        'python_version:3.12.7',
        'runtime:dev',
      ],
      last_heartbeat_ts: 1739390738,
    },
    {
      flow_id: 'BasicFlow',
      run_number: 1,
      run_id: null,
      step_name: 'end',
      task_id: 520369,
      task_name: null,
      user_name: 'santeri@outerbounds.co',
      status: 'running',
      task_ok: null,
      ts_epoch: 1739390828154,
      started_at: 1739390841744,
      finished_at: 1739390842615,
      duration: 871,
      attempt_id: 0,
      tags: [],
      system_tags: [
        'user:santeri@outerbounds.co',
        'metaflow_version:2.12.30.1',
        'python_version:3.12.7',
        'runtime:dev',
      ],
      last_heartbeat_ts: 1739390842,
    },
  ]),
  stantardGetEndpoint('api/flows/:flowid/runs/:runid/dag', {
    file: 'second_flow.py',
    parameters: [],
    constants: [],
    steps: {
      start: {
        name: 'start',
        type: 'split-foreach',
        line: 17,
        doc: '',
        decorators: [],
        next: ['a'],
        foreach_artifact: 'indices',
        matching_join: 'join',
      },
      process: {
        name: 'a',
        type: 'linear',
        line: 23,
        doc: '',
        decorators: [],
        next: ['join'],
      },
      join: {
        name: 'join',
        type: 'join',
        line: 30,
        doc: '',
        decorators: [],
        next: ['end'],
      },
      end: {
        name: 'end',
        type: 'end',
        line: 35,
        doc: '',
        decorators: [],
        next: [],
      },
    },
    graph_structure: ['start', [['process']], 'join', 'end'],
    doc: '',
    decorators: [],
    extensions: {},
  }),
  rawGetEndpoint('api/plugin', []),
  rawGetEndpoint('api/features', {}),
  stantardGetEndpoint('api/links', []),
  stantardGetEndpoint('api/notifications', []),
  wsApi.addEventListener('connection', ({ client }) => {
    client.addEventListener('message', (event) => {
      if (event.data === '__ping__') {
        client.send('__pong__');
      }
    });
  }),
);
