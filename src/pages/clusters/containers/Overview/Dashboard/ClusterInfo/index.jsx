/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */
import { get } from 'lodash'
import React, { Component } from 'react'
import { Panel, Text } from 'components/Base'

import styles from './index.scss'

export default class ClusterInfo extends Component {
  render() {
    const { cluster } = this.props
    return (
      <Panel title={t('Cluster Info')}>
        <div className={styles.level}>
          <Text title={cluster.provider} description={t('Provider')} />
          <Text title={cluster.ip} description={t('Cluster IP Address')} />
          <Text
            title={get(cluster, 'label.env', '-')}
            description={t('Cluster Label')}
          />
        </div>
        <div className={styles.level}>
          <Text
            title={cluster.kubernetesVersion}
            description={t('Kubernetes Version')}
          />
          <Text
            title={cluster.kubeletVersion}
            description={t('Kubelet Version')}
          />
          <Text
            title={cluster.kubeProxyVersion}
            description={t('Kube-Proxy Version')}
          />
          <Text
            title={cluster.networkPlugin}
            description={t('Network Plugin')}
          />
        </div>
      </Panel>
    )
  }
}