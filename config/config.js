/*
 * (C) Copyright 2016 Jan Koppe.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
var c = {};
c.version = {};
c.net = {};
c.mongo = {};
c.fs = {};
var env = process.env;

// Information about muncher
c.version.major  = 0;
c.version.minor  = 1;
c.version.bug    = 0;
c.version.api    = 1;

// network & database
c.net.port         = env.CONTENTBUTLER_PORT || 8081;
c.mongo.location   = env.CONTENTBUTLER_MONGODB || 'mongodb://localhost/';
c.mongo.collection = env.CONTENTBUTLER_MONGODB_COLLECTION || 'muncher';
c.mongo.creds      = {};

// fix mongo location if trailing slash was omitted
if (c.mongo.location[c.mongo.location.length-1] !== '/') {
  c.mongo.location += '/';
}

// fs paths
c.fs.base       = env.CONTENTBUTLER_BASEPATH || '/tmp/o2r/';
c.fs.incoming   = c.fs.base + 'incoming/';
c.fs.compendium = c.fs.base + 'compendium/';
c.fs.job        = c.fs.base + 'job/';
c.fs.tmp     = c.fs.base + 'imgtmp/';
c.fs.delete_inc = true;

module.exports = c;
