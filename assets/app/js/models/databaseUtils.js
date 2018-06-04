/*
 #
 # Copyright (c) 2018 nexB Inc. and others. All rights reserved.
 # https://nexb.com and https://github.com/nexB/scancode-toolkit/
 # The ScanCode software is licensed under the Apache License version 2.0.
 # AboutCode is a trademark of nexB Inc.
 #
 # You may not use this software except in compliance with the License.
 # You may obtain a copy of the License at: http://apache.org/licenses/LICENSE-2.0
 # Unless required by applicable law or agreed to in writing, software distributed
 # under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 # CONDITIONS OF ANY KIND, either express or implied. See the License for the
 # specific language governing permissions and limitations under the License.
 #
 */

const Sequelize = require('sequelize');

// Stores an object as a json string internally, but as an object externally
module.exports = {
  jsonDataType: function(attributeName) {
    return {
      type: Sequelize.STRING,
      get: function() {
        return JSON.parse(this.getDataValue(attributeName));
      },
      set: function(val) {
        return this.setDataValue(attributeName, JSON.stringify(val));
      }
    };
  },
  parentPath: function(path) {
    const splits = path.split('/');
    return splits.length === 1 ? '#' : splits.slice(0, -1).join('/');
  }
};